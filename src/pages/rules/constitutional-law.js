import Layout from '../../components/Layout';
import Accordion from 'react-spring-accordion';

const ConstitutionalLaw = () => {
  return (
    <>
      <Layout>
        <div className='flex font-bold justify-center bg-red-700 text-white rounded text-3xl'>
          Constitutional Law
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Equal Protection
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>
                A lawyer owes each client a duty of loyalty and must act with
                the <b>client's best interest</b> in mind. A lawyer must not
                represent a client if the representation involves a conflict of
                interest. A conflict exists if:
                <br /> (1) the representation of one client will be{' '}
                <b>directly adverse</b> to another client; or <br />
                (2) there is a <b>signficant risk</b> that the representation
                will be <b>materially limited</b> by the lawyer's
                responsibilities to another client, a former client, a third
                person, or by the lawyer's own personal interests.
              </Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Orginizational Standing
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='Attorneys owe their clients...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Content-Based Restrictions
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Substantive Due Process
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Procedural Due Process
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Takings
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Time, Place, and Manner Regulations
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Vague / Overbroad
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Free Exercise / Establishment Clause
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Dormant Commerce Clause
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default ConstitutionalLaw;
