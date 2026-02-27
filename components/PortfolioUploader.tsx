'use client';

import { useRef, useState } from 'react';

export type PortfolioDraftItem = {
  image_url: string;
};

type PortfolioUploaderProps = {
  value: PortfolioDraftItem[];
  onChange: (items: PortfolioDraftItem[]) => void;
  maxItems?: number;
  error?: string;
  className?: string;
};

const MAX_DIMENSION = 1600;
const TARGET_BYTES = 320 * 1024;
const JPEG_QUALITY_LEVELS = [0.86, 0.78, 0.7, 0.62, 0.54];

function dataUrlSizeBytes(dataUrl: string): number {
  const base64 = dataUrl.split(',')[1] || '';
  return Math.ceil((base64.length * 3) / 4);
}

async function compressImageToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const width = image.naturalWidth || image.width;
      const height = image.naturalHeight || image.height;
      if (!width || !height) {
        reject(new Error('Could not read image size.'));
        return;
      }

      const ratio = Math.min(1, MAX_DIMENSION / Math.max(width, height));
      const targetWidth = Math.max(1, Math.round(width * ratio));
      const targetHeight = Math.max(1, Math.round(height * ratio));

      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const context = canvas.getContext('2d');
      if (!context) {
        reject(new Error('Could not process image.'));
        return;
      }
      context.clearRect(0, 0, targetWidth, targetHeight);
      context.drawImage(image, 0, 0, targetWidth, targetHeight);

      let best = '';
      for (const quality of JPEG_QUALITY_LEVELS) {
        const candidate = canvas.toDataURL('image/jpeg', quality);
        best = candidate;
        if (dataUrlSizeBytes(candidate) <= TARGET_BYTES) {
          resolve(candidate);
          return;
        }
      }
      resolve(best);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Invalid image file.'));
    };

    image.src = objectUrl;
  });
}

export default function PortfolioUploader({
  value,
  onChange,
  maxItems = 3,
  error,
  className,
}: PortfolioUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [localError, setLocalError] = useState('');
  const [isCompressing, setIsCompressing] = useState(false);

  const displayError = error || localError;

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setLocalError('');

    const availableSlots = Math.max(0, maxItems - value.length);
    if (availableSlots === 0) {
      setLocalError(`Maximum ${maxItems} portfolio images are allowed.`);
      return;
    }

    const incoming = Array.from(files).slice(0, availableSlots);
    for (const file of incoming) {
      if (!file.type.startsWith('image/')) {
        setLocalError('Portfolio files must be images.');
        return;
      }
    }

    setIsCompressing(true);
    try {
      const compressedItems: PortfolioDraftItem[] = [];
      for (const file of incoming) {
        const image_url = await compressImageToDataUrl(file);
        compressedItems.push({ image_url });
      }
      onChange([...value, ...compressedItems]);
    } catch (uploadError) {
      setLocalError(uploadError instanceof Error ? uploadError.message : 'Could not process one or more files.');
    } finally {
      setIsCompressing(false);
    }
  };

  const removeItem = (index: number) => {
    onChange(value.filter((_, itemIndex) => itemIndex !== index));
    setLocalError('');
  };

  return (
    <div className={className}>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        multiple
        className="hidden"
        onChange={(event) => {
          void handleFiles(event.target.files);
          event.currentTarget.value = '';
        }}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full rounded-xl border border-dashed border-white/35 bg-white/5 px-4 py-4 text-left text-white/80 hover:border-gold/70 transition-colors"
      >
        <span className="block text-sm font-semibold text-white">
          {isCompressing ? 'Processing images...' : 'Upload Portfolio Images'}
        </span>
        <span className="mt-1 block text-xs text-white/65">
          Add up to {maxItems} images. Files are compressed automatically.
        </span>
      </button>

      {value.length > 0 ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {value.map((item, index) => (
            <div key={`${item.image_url.slice(0, 32)}-${index}`} className="rounded-xl border border-white/20 bg-white/5 p-3">
              <div className="relative overflow-hidden rounded-lg border border-white/20">
                <img
                  src={item.image_url}
                  alt={`Portfolio item ${index + 1}`}
                  className="h-32 w-full object-cover"
                />
              </div>
              <button
                type="button"
                className="mt-2 text-xs font-semibold text-red-200 hover:text-red-100"
                onClick={() => removeItem(index)}
              >
                Remove image
              </button>
            </div>
          ))}
        </div>
      ) : null}

      {displayError ? <p className="mt-2 text-sm text-red-200">{displayError}</p> : null}
    </div>
  );
}
