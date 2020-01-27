import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const makeDateAgo = (date: string) => dayjs().to(dayjs(date));

export default makeDateAgo;
