export const Female = () => {
  return (
    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 100">
      <g className="body">
        <path fill="#FFF" stroke="#000" strokeMiterlimit="10" d="M18.198 8.293c0-3.15.378-5.703 2.508-6.665.547-.247 2.289-.503 2.899-.503.58 0 2.496.18 3.02.404 2.173.93 2.387 3.574 2.387 6.764 0 3.959-2.421 7.168-5.407 7.168s-5.407-3.21-5.407-7.168z"/>
        <path fill="#FFF" stroke="#000" strokeMiterlimit="10" d="M40.127 42.432s.902-18.172.774-21.499-5.305-3.627-5.305-3.627l-5.766-.386c-2.65 0-2.65-2.65-2.65-2.65h-6.459s0 2.65-2.65 2.65l-5.766.386S7.128 17.605 7 20.933s.774 21.499.774 21.499"/>
        <path fill="#FFF" stroke="#000" strokeMiterlimit="10" d="M13.015 41.536V22.724l3.068 28.154-.56 21.405 2.696 26.837c.011.11.171.111.183.001l5.203-45.499L29.5 99.121c.012.11.172.109.183-.001l2.696-26.837-.56-21.405 3.068-28.154v18.812"/>
      </g>
      <g className="censored">
        <g className="censored-motion">
          <path opacity=".8" fill="gray" d="M15 53h8v8h-8z"/>
          <path opacity=".8" fill="#CCC" d="M23 53h9v8h-9z"/>
          <path opacity=".8" fill="gray" d="M23 46h9v7h-9z"/>
          <path opacity=".8" fill="#CCC" d="M15 46h8v7h-8z"/>
        </g>
        <path fill="#666" d="M19 50h8v7h-8z"/>
      </g>
      <g className="arm arm-right">
        <path fill="#FFF" stroke="#000" strokeMiterlimit="10" d="M7.774 42.432l13.943 14.305 3.839-1.764-12.541-13.437"/>
      </g>
      <g className="arm arm-left">
        <path fill="#FFF" stroke="#000" strokeMiterlimit="10" d="M40.127 42.432L26.184 56.737l-3.84-1.764 12.542-13.437"/>
      </g>
    </svg>
  );
}