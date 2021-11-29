import Iframe from "react-iframe";

export const Calendar = () => {
  return (
    <div>
      <Iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Asia%2FTokyo&showTitle=0&showDate=1&showNav=1&showTz=0&showPrint=0&showTabs=0&showCalendars=0&title=%E6%A0%B9%E6%B4%A5%E6%95%B4%E4%BD%93%E9%99%A2&mode=MONTH&src=bDA1dXIybGpvYnJjZTZudnZmZzgzazJ1NDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23795548&color=%230B8043"
        style="border-width:0"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></Iframe>
    </div>
  );
};