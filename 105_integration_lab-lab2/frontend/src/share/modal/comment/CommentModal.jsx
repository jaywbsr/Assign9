import { Box, Button, Card, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useKeyDown } from '../../../hooks/useKeyDown';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Axios from '../../AxiosInstance';
import { AxiosError } from 'axios';
const CommentModal = ({ open = false, handleClose = () => {} }) => {
  const [textField, setTextField] = useState('');
  const [comments, setComments] = useState([]);

  useKeyDown(() => {
    handleAddComment();
  }, ['Enter']);

  
  const handleAddComment = () => {
    // TODO implement logic
    
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          width: { xs: '60vw', lg: '40vw' },
          maxWidth: '600px',
          maxHeight: '400px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '16px',
          backgroundColor: '#ffffffCC',
          p: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <TextField
            value={textField}
            onChange={(e) => setTextField(e.target.value)}
            fullWidth
            placeholder="Type your comment"
            variant="standard"
          />
          <Button onClick={handleAddComment}>Submit</Button>
        </Box>
        <Box sx={{ overflowY: 'scroll', maxHeight: 'calc(400px - 2rem)' }}>
          {comments.map((comment) => (
            <Card key={comment.id} sx={{ p: '1rem', m: '0.5rem' }}>
              {comment.msg}
            </Card>
          ))}
        </Box>
      </Card>
    </Modal>
  );
};

export default CommentModal;

// import { Box, Button, Card, Modal, TextField } from '@mui/material';
// import React, { useContext, useState } from 'react';
// import { useKeyDown } from '../../../hooks/useKeyDown';
// import { useMutation, useQuery } from 'react-query';
// import GlobalContext from '../../context/GlobalContext';
// import Cookies from 'js-cookie';
// import Axios from '../../AxiosInstance';

// const CommentModal = ({ open = false, handleClose = () => {} }) => {
//   const [textField, setTextField] = useState('');
//   // const [comments, setComments] = useState([]);
//   const { comments, setComments } = useContext(GlobalContext);
//   const userToken = Cookies.get('UserToken');

//   const { isLoading, isError, data, error, refetch } = useQuery('comments',
//   async ()=> await Axios.get('/comment', { headers: { Authorization: `Bearer ${userToken}`}}),
//   { onSuccess: (data) => { setComments(data.data.data.map(x=> ({...x,msg: x.text})))}}
//   );

//   useKeyDown(() => {
//     handleAddComment();
//   }, ['Enter']);

//   const commentMutation = useMutation(async () => {
//     const resp = await Axios
//       .post('/comment', { text: textField }, { headers: { Authorization: `Bearer ${userToken}` } })

//     if (resp.data.success) {
//       setComments([...comments, {id: resp.data.id, msg: resp.data.data.text}])
//       setTextField('');
//     }
//   })

//   const handleAddComment = () => {
//     // TODO implement logic
//     commentMutation.mutate();
//   };
//   return (
//     <Modal open={open} onClose={handleClose}>
//       <Card
//         sx={{
//           width: { xs: '60vw', lg: '40vw' },
//           maxWidth: '600px',
//           maxHeight: '400px',
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           borderRadius: '16px',
//           backgroundColor: '#ffffffCC',
//           p: '2rem',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//           }}
//         >
//           <TextField
//             value={textField}
//             onChange={(e) => setTextField(e.target.value)}
//             fullWidth
//             placeholder="Type your comment"
//             variant="standard"
//           />
//           <Button onClick={handleAddComment}>Submit</Button>
//         </Box>
//         <Box sx={{ overflowY: 'scroll', maxHeight: 'calc(400px - 2rem)' }}>
//           {comments.map((comment) => (
//             <Card key={comment.id} sx={{ p: '1rem', m: '0.5rem' }}>
//               {comment.msg}
//             </Card>
//           ))}
//         </Box>
//       </Card>
//     </Modal>
//   );
// };

// export default CommentModal;

