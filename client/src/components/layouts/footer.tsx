// app/components/Footer.tsx
import {
  Facebook,
  Instagram,
  Youtube,
  Twitch,
  Mail,
  Twitter,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Showtime - All rights reserved.
        </p>

        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="https://youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://twitch.tv/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Twitch className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:you@example.com"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
