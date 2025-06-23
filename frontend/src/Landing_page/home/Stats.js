// import React from 'react';
// function Stats() {
//      return ( 
//           <div className='container p-5'> 
//           <div className='row'>
//                <div className='col-6 p-5'> 
                 
//                     <h1 className='fs-2 mb-5'>Trust with confidence</h1>
//                     <h2 className='fs-4'>Customer-first always</h2>
//                     <p className='text muted'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>

//                       <h2 className='fs-4'>No spam or gimmicks</h2>
//                     <p className='text muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

//                       <h2 className='fs-4'>The Zerodha universe</h2>
//                     <p className='text muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your need</p>

//                       <h2 className='fs-4'>Do better with money</h2>
//                     <p className='text muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
//                     </div>
//                      <div className='col-6 p-5'>
//                     <img src='\Media\ecosystem.png'style={{width:"90%"}} />
                    
//                         <div className='text-center'>
//                          <a herf=''className='mx-5'style={{textDecoration:"none"}}>Explore out products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
//                          <a herf=''className='mx-5'style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
//                     </div>
//                  </div>
//           </div>
//           </div>
//       );
// }

// export default Stats;
import React from 'react';

function Stats() {
  return (
    <div className='container p-5'>
      <div className='row align-items-center'>
        {/* Text Section */}
        <div className='col-md-6 p-4'>
          <h1 className='fs-2 mb-4 fw-bold text-primary'>Trust with confidence</h1>

          <div className='mb-4'>
            <h2 className='fs-5 fw-semibold'>Customer-first always</h2>
            <p className='text-muted'>
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
            </p>
          </div>

          <div className='mb-4'>
            <h2 className='fs-5 fw-semibold'>No spam or gimmicks</h2>
            <p className='text-muted'>
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className='mb-4'>
            <h2 className='fs-5 fw-semibold'>The Zerodha universe</h2>
            <p className='text-muted'>
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your need.
            </p>
          </div>

          <div>
            <h2 className='fs-5 fw-semibold'>Do better with money</h2>
            <p className='text-muted'>
              With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className='col-md-6 p-4'>
          <img
            src='/Media/ecosystem.png'
            alt='Zerodha Ecosystem'
            className='img-fluid rounded shadow'
            style={{ width: '90%' }}
          />

          <div className='text-center mt-4'>
            <a
              href='#'
              className='btn btn-outline-primary mx-3'
            >
              Explore our products <i className='fa fa-long-arrow-right'></i>
            </a>
            <a
              href='#'
              className='btn btn-outline-secondary mx-3'
            >
              Try Kite demo <i className='fa fa-long-arrow-right'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
