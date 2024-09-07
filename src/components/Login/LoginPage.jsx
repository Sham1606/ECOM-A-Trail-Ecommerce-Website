import cover_image from '../cover_image.jpg';
import google from '../google.png'
const colors = {
                        primary: '#060606',
                        background : '#E0E0E0',
                        disabled:'#D9D9D9',
}

const Login = () => {
  return (
    <div className='w-full h-screen flex flex-col md:flex-row items-start'>
      {/* Left Side: Image */}
      <div className='relative w-full md:w-1/2 h-1/3 md:h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
        </div>
        <img src={cover_image} className='w-full h-full object-cover' />
      </div>

      {/* Right Side: Form */}
      <div className='w-full md:w-1/2 max-w-[500px] h-full bg-[#f5f5f5] flex flex-col p-10 md:p-20 justify-between items-center'>
        <h1 className='text-primary font-semibold tracking-widest text-xl sm:text-2xl lg:text-3xl uppercase transition duration-300 hover:scale-105'>
          ECOM - A Trail Ecommerce Website
        </h1>

        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-lg md:text-xl font-semibold mb-2'>Login</h3>
            <p className='text-sm md:text-base mb-2'>Welcome Back! Please enter your details.</p>
          </div>

          <div className='w-full flex flex-col'>
            <input
              type="email"
              placeholder='Email'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black focus:outline-none'
            />
            <input
              type="password"
              placeholder='Password'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black focus:outline-none'
            />
          </div>

          <div className='w-full flex items-center justify-between'>
            <div className='flex items-center'>
              <input type="checkbox" className='w-4 h-4 mr-2' />
              <p className='text-sm'>Remember for 30 days</p>
            </div>
            <p className='text-sm font-medium cursor-pointer underline underline-offset-2'>
              Forgot Password
            </p>
          </div>

          <div className='w-full flex flex-col'>
            <button className='w-full text-white my-2 bg-[#060606] rounded-md p-4'>
              Login
            </button>
            <button className='w-full text-[#060606] my-2 bg-white border-black rounded-md p-4'>
              Register
            </button>
          </div>

          <div className='w-full flex items-center justify-center relative py-2'>
            <div className='w-full h-[1px] bg-black/40'></div>
            <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
          </div>

          <div className='w-full text-[#060606] my-2 bg-white border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            <img src={google} alt="google" className='h-6 mr-2' />
            Sign In with Google
          </div>
        </div>

        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#060606]'>
            Don't have an account? <span className='font-semibold underline cursor-pointer'>Sign up for free</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;