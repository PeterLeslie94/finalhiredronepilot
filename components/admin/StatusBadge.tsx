const ENQUIRY_STATUS: Record<string, { label: string; color: string }> = {
  NEW: { label: 'New', color: 'bg-blue-100 text-blue-800' },
  ACK_SENT: { label: 'Acknowledged', color: 'bg-gray-100 text-gray-800' },
  INVITES_SENT: { label: 'Invites Sent', color: 'bg-purple-100 text-purple-800' },
  CLOSED: { label: 'Closed', color: 'bg-slate-100 text-slate-700' },
};

const PILOT_STATUS: Record<string, { label: string; color: string }> = {
  SUBMITTED: { label: 'Submitted', color: 'bg-blue-100 text-blue-800' },
  UNDER_REVIEW: { label: 'Under Review', color: 'bg-amber-100 text-amber-800' },
  APPROVED: { label: 'Approved', color: 'bg-green-100 text-green-800' },
  REJECTED: { label: 'Rejected', color: 'bg-red-100 text-red-800' },
  NEEDS_INFO: { label: 'Needs Info', color: 'bg-yellow-100 text-yellow-800' },
};

const INVITE_STATUS: Record<string, { label: string; color: string }> = {
  QUEUED: { label: 'Queued', color: 'bg-gray-100 text-gray-700' },
  SENT: { label: 'Sent', color: 'bg-blue-100 text-blue-800' },
  OPENED: { label: 'Opened', color: 'bg-purple-100 text-purple-800' },
  DECLINED: { label: 'Declined', color: 'bg-red-100 text-red-800' },
  EXPIRED: { label: 'Expired', color: 'bg-red-50 text-red-600' },
};

type StatusBadgeProps = {
  status: string;
  type?: 'enquiry' | 'pilot' | 'invite';
};

export default function StatusBadge({ status, type = 'enquiry' }: StatusBadgeProps) {
  const map =
    type === 'pilot'
      ? PILOT_STATUS
      : type === 'invite'
        ? INVITE_STATUS
        : ENQUIRY_STATUS;

  const entry = map[status] || { label: status, color: 'bg-gray-100 text-gray-700' };

  return (
    <span
      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${entry.color}`}
    >
      {entry.label}
    </span>
  );
}
