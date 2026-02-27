'use client';

import { useRef, useState } from 'react';

const HEADSHOT_TARGET_BYTES = 220 * 1024;
const HEADSHOT_SIZES = [512, 448, 384, 320];
const JPEG_QUALITY_LEVELS = [0.84, 0.76, 0.68, 0.6, 0.52, 0.45];

function dataUrlSizeBytes(dataUrl: string): number {
  const base64 = dataUrl.split(',')[1] || '';
  return Math.ceil((base64.length * 3) / 4);
}

async function fileToSquareDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      const width = image.naturalWidth || image.width;
      const height = image.naturalHeight || image.height;
      URL.revokeObjectURL(objectUrl);

      if (!width || !height) {
        reject(new Error('Could not read the image size.'));
        return;
      }
      const cropSize = Math.min(width, height);
      const offsetX = Math.floor((width - cropSize) / 2);
      const offsetY = Math.floor((height - cropSize) / 2);

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) {
        reject(new Error('Could not process the image.'));
        return;
      }

      let bestDataUrl = '';
      for (const size of HEADSHOT_SIZES) {
        canvas.width = size;
        canvas.height = size;
        context.clearRect(0, 0, size, size);
        context.drawImage(image, offsetX, offsetY, cropSize, cropSize, 0, 0, size, size);

        for (const quality of JPEG_QUALITY_LEVELS) {
          const candidate = canvas.toDataURL('image/jpeg', quality);
          bestDataUrl = candidate;
          if (dataUrlSizeBytes(candidate) <= HEADSHOT_TARGET_BYTES) {
            resolve(candidate);
            return;
          }
        }
      }

      resolve(bestDataUrl);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Invalid image file.'));
    };

    image.src = objectUrl;
  });
}

type PhotoUploaderProps = {
  value: string;
  onChange: (dataUrl: string) => void;
  error?: string;
  className?: string;
};

export default function PhotoUploader({ value, onChange, error, className }: PhotoUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [localError, setLocalError] = useState('');

  const isDataUrl = value.startsWith('data:');
  const isHttpUrl = value.startsWith('http://') || value.startsWith('https://');
  const hasPreview = isDataUrl || isHttpUrl;

  const handleFile = async (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setLocalError('Headshot must be an image file (JPG, PNG, or WEBP).');
      return;
    }
    setLocalError('');
    try {
      const dataUrl = await fileToSquareDataUrl(file);
      onChange(dataUrl);
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Could not process headshot.');
    }
  };

  const displayError = error || localError;

  return (
    <div className={className}>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          void handleFile(file);
          e.currentTarget.value = '';
        }}
      />
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragActive(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          const file = e.dataTransfer.files?.[0];
          void handleFile(file);
        }}
        className={`rounded-xl border-2 border-dashed p-5 text-center cursor-pointer transition-colors ${
          dragActive
            ? 'border-teal bg-teal/5'
            : 'border-gray-300 bg-gray-50'
        }`}
      >
        {hasPreview ? (
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-xl border border-gray-200 group">
            <img
              src={value}
              alt="Drone pilot headshot preview"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm font-medium">Replace</span>
            </div>
          </div>
        ) : (
          <div className="text-gray-600">
            <p className="font-medium">Drag and drop your headshot here</p>
            <p className="text-sm text-gray-400 mt-1">
              Or click to select. Any image ratio is accepted and auto-cropped to 1:1 (JPG, PNG, WEBP).
            </p>
          </div>
        )}
      </div>

      {hasPreview && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onChange('');
            setLocalError('');
          }}
          className="text-sm text-red-600 hover:text-red-700 transition-colors mt-2"
        >
          Remove headshot
        </button>
      )}

      {displayError && (
        <p className="text-red-600 text-sm mt-1">{displayError}</p>
      )}
    </div>
  );
}
