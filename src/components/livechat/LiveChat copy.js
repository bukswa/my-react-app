const { useEffect, useState } = require("react");

export function useUserOnline() {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = (flag) => {
    setIsOnline(true);
  };

  const handleOffline = (flag) => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}

// const withTitle = (Component) =>{
//     return (props) =>{
//         return <Component title="hello" {...props} />
//     }
// }

// const MyInput = () => <div>input</div>
// const TitledComponent = withTitle(<MyInput />)

// <TitledComponent />
