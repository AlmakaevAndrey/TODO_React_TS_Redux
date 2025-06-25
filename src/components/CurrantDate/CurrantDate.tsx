import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import styled from 'styled-components';

interface CurrantDateProps {
  format?: string;
}

const CurrantDateSpan = styled.span`
  display: flex;
`;

export const CurrantDate: React.FC<CurrantDateProps> = ({
  format = 'D MMMM YYYY, HH:mm',
}) => {
  const [currantTime, setCurrantTime] = useState(dayjs());

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrantTime(dayjs());
    }, 60000);

    return () => clearInterval(interval);
  }, [format]);

  return <CurrantDateSpan>{currantTime.format(format)}</CurrantDateSpan>;
};

export default CurrantDate;
