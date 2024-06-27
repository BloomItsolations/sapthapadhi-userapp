import React, { useState, useEffect } from 'react';

const cachedScriptStatuses = {};

function getScriptNode(src) {
  const node = document.querySelector(`script[src="${src}"]`);
  const status = node?.getAttribute('data-status');

  return {
    node,
    status,
  };
}

export default function useScript(src) {
  const [status, setStatus] = useState(() => {
    if (typeof window === 'undefined') {
      return 'loading'; // Server-side rendering (SSR) handling
    }

    return cachedScriptStatuses[src] ?? 'loading';
  });

  useEffect(() => {
    const cachedScriptStatus = cachedScriptStatuses[src];
    if (cachedScriptStatus === 'ready' || cachedScriptStatus === 'error') {
      setStatus(cachedScriptStatus);
      return;
    }

    let scriptNode = getScriptNode(src).node;

    if (!scriptNode) {
      scriptNode = document.createElement('script');
      scriptNode.src = src;
      scriptNode.async = true;
      scriptNode.setAttribute('data-status', 'loading');
      document.body.appendChild(scriptNode);

      const setAttributeFromEvent = (event) => {
        const scriptStatus = event.type === 'load' ? 'ready' : 'error';
        scriptNode?.setAttribute('data-status', scriptStatus);
      };

      scriptNode.addEventListener('load', setAttributeFromEvent);
      scriptNode.addEventListener('error', setAttributeFromEvent);
    } else {
      setStatus(scriptNode.getAttribute('data-status') ?? cachedScriptStatus ?? 'loading');
    }

    const setStateFromEvent = (event) => {
      const newStatus = event.type === 'load' ? 'ready' : 'error';
      setStatus(newStatus);
      cachedScriptStatuses[src] = newStatus;
    };

    scriptNode.addEventListener('load', setStateFromEvent);
    scriptNode.addEventListener('error', setStateFromEvent);

    return () => {
      scriptNode.removeEventListener('load', setStateFromEvent);
      scriptNode.removeEventListener('error', setStateFromEvent);

      try {
        scriptNode.remove();
      } catch (error) {
        // ignore error
      }
    };
  }, [src]);

  return status;
}
