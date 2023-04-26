import executequery from '../../lib/db'
import handler from './catagorey';

export default async function allinfo(req, res) {
    try {
        // console.log("req nom", req)
      const result = await executequery({
          query: 'select * from all_post_table apt join all_post_image api on apt.imageId = api.imageId where apt.id = ?',
          values: [2],
      });
      console.log( "ttt",result );
     const strdata = JSON.stringify(result[0].content)
     console.log(strdata)
      res.status(200).json(result)
      return(result)
  } catch ( error ) {
      console.log( error );
  }
  
  
  };

  export  async function someinfo(req, res) {
    try {
        // console.log("req nom", req)
      const result = await executequery({
          query: 'select * from all_post_table apt join all_post_image api on apt.imageId = api.imageId where apt.id = ?',
          values: [1],
      });
      console.log( "ttt",result );
     const strdata = JSON.stringify(result[0].id)
     console.log(strdata)
      res.status(200).json(result)
      return(result)
  } catch ( error ) {
      console.log( error );
  }
  
  
  };