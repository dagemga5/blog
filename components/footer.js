import {ImFacebook2,ImGithub,ImLinkedin,ImTwitter} from 'react-icons/im'
export default function footer() {
    return (

        <footer className="bg-gray-50 mt-auto">
          <div className="container mx-auto flex justify-center py-12">
<div className="py-5">
<div className="flex gap-6 justify-center">
<a><ImFacebook2 size={30}/></a>
     <a><ImLinkedin size={30}/></a>
     <a><ImTwitter size={30}/></a>
     <a><ImGithub size={30}s/></a>

</div>
<p className='text-md py-5'>
    
Copyright ©2023 by DGM . All Rights Reserved.
</p>
<p className='text-md text-center'>
    
Terms and Condition
</p>
</div>
          </div>
        </footer>


    );
}
