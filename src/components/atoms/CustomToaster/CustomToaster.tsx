import { Toaster } from 'react-hot-toast';

const CustomToaster = () => (
  <Toaster
    position="bottom-right"
    reverseOrder={false}
    toastOptions={{
      className: 'text-base bg-primarySemiDarkBlue text-primaryWhite',
      duration: 4000,
    }}
  />
);

export default CustomToaster;
