```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted');
    return () => {
      // Cleanup function: runs before component unmounts
      console.log('Unmounting');
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```