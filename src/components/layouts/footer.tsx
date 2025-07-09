import React from "react";

// app/components/Footer.tsx
function Footer() {
  const [currentDateTime, setCurrentDateTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('en-GB');
  const formattedTime = currentDateTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  let orgName = "Showtime";
  let userName = "Guest";
  let userRole = "Guest";

  return (
    <footer className="border-t bg-zinc-950">
      <div className="container flex flex-col items-center justify-between gap-2 py-6 md:h-16 md:flex-row md:py-0 px-4 mx-auto">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-2">
          <p className="text-center text-xs leading-loose text-white md:text-left">
            {" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {orgName}
            </a>
          </p>
        </div>
        <div className="flex items-center text-white space-x-2">
          <span id="date" className="text-xs">{formattedDate}</span>
          <span className="text-zinc-600">•</span>
          <span id="time" className="text-xs">{formattedTime}</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <p className="text-xs">{userName}</p>
          <span className="text-zinc-600">•</span>
          <p className="text-xs">{userRole}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
