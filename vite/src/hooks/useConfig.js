import { useContext } from 'react'; // Change 'use' to 'useContext'
import { ConfigContext } from 'contexts/ConfigContext';

// ==============================|| CONFIG - HOOKS ||============================== //

export default function useConfig() {
  const context = useContext(ConfigContext); // Use useContext here

  if (!context) throw new Error('useConfig must be used inside ConfigProvider');

  return context;
}
