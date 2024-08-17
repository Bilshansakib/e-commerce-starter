
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationPage = () => (
  <>
      <Stack spacing={2}>
      <Pagination count={10} variant="outlined" color="secondary" />
      
    </Stack>
  </>
);

export default PaginationPage;