import Star from '../Star';

import './Stars.css';

interface IStarsProps {
  count: number,
}

export default function Stars(props: IStarsProps) {
  const {count} = props;

  if (count < 1 || count > 5 || typeof count !== 'number') return;

  return (
    <ul className="card-body-stars u-clearfix">
      {[...Array(count)].map((index) => <li><Star key={index}/></li>)}
    </ul>
  );
}
