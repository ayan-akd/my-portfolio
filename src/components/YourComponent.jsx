// Before (problematic code)
const sections = ['section1', 'section2', 'section3'];

useEffect(() => {
  // effect using sections
}, [sections]);

// After (optimized code)
const sections = useMemo(() => ['section1', 'section2', 'section3'], []);

useEffect(() => {
  // effect using sections
}, [sections]);
