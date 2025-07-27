type DateStringToDate = (dateString: string) => Date;

export const dateStringToDate: DateStringToDate = (dateString: string): Date => {
   const dateParts: Array<number> = dateString.split('/').map(Number);
   return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
