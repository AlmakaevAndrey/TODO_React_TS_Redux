import React, { useEffect, useState } from 'react';
import 'dayjs/locale/ru';
import { CurrantDateSpan } from './CurrantDate.styles';

interface CurrantDateProps {
  format?: string;
}

export const CurrantDate: React.FC<CurrantDateProps> = () => {
  const [currantTime, setCurrantTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrantTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dateString = currantTime.toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return <CurrantDateSpan>{dateString}</CurrantDateSpan>;
};

export default CurrantDate;
