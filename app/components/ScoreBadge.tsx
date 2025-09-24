interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeClasses = '';
  let text = '';

  if (score > 70) {
    badgeClasses = 'bg-green-100 text-green-800';
    text = 'Strong';
  } else if (score > 49) {
    badgeClasses = 'bg-yellow-100 text-yellow-800';
    text = 'Good Start';
  } else {
    badgeClasses = 'bg-red-100 text-red-800';
    text = 'Needs Work';
  }

  return (
    <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${badgeClasses}`}>
      <p>{text}</p>
    </div>
  );
};

export default ScoreBadge;