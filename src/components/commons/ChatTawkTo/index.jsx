import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ChatTawkTo = () => {
  const location = useLocation();
  const initializedRef = useRef(false);

  const isChatPage = pathname => pathname === '/country';

  const updateChatVisibility = pathname => {
    if (window.Tawk_API) {
      if (isChatPage(pathname)) {
        window.Tawk_API.showWidget();
      } else {
        window.Tawk_API.minimize();
        window.Tawk_API.hideWidget();
      }
    }
  };

  useEffect(() => {
    const pathname = location.pathname;

    if (
      isChatPage(pathname) &&
      !initializedRef.current &&
      !document.getElementById('tawk-script')
    ) {
      const script = document.createElement('script');
      script.id = 'tawk-script';
      script.async = true;
      script.src = 'https://embed.tawk.to/68496c39368f6c190bdd4ea6/1itfctgrj';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.body.appendChild(script);

      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      window.Tawk_API.onLoad = () => {
        initializedRef.current = true;
        updateChatVisibility(pathname);
      };
    }

    if (initializedRef.current && window.Tawk_API) {
      updateChatVisibility(pathname);
    }
  }, [location]);

  return null;
};

export default ChatTawkTo;
