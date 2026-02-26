import { HONEYPOT_FIELD_NAME } from '@/lib/honeypot';

type HoneypotFieldProps = {
  className?: string;
};

export default function HoneypotField({ className = '' }: HoneypotFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    >
      <label htmlFor={HONEYPOT_FIELD_NAME}>Leave this field blank</label>
      <input
        id={HONEYPOT_FIELD_NAME}
        name={HONEYPOT_FIELD_NAME}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
