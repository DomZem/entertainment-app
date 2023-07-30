import { Toaster } from 'react-hot-toast';

const CustomToaster = () => (
  <Toaster
    position="bottom-right"
    reverseOrder={false}
    toastOptions={{
      duration: 4000,
      style: {
        fontSize: '1rem',
        background: '#161d2f',
        color: '#ffffff',
      },
    }}
  />
);

export default CustomToaster;
