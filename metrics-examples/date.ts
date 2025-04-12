import dayjs from 'dayjs';

const createDateIteration = (startIterationDate: number = Date.now()) => {
  const iterationStart = dayjs(startIterationDate).endOf('M');

  return (monthsFromDate: number) => {
    const end = iterationStart.subtract(monthsFromDate, 'M').endOf('M');
    const start = end.startOf('M');

    const readable = end.format('YYYY MMMM');

    return {
      readable,
      startRegular: +start,
      endRegular: +end,
      startUnix: start.unix(),
      endUnix: end.unix(),
    };
  };
};

export { createDateIteration };
