```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let interval;
    if (mounted) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      console.log('Unmounting');
    };
  }, [mounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setMounted(false)}>Unmount</button>
    </div>
  );
}
```