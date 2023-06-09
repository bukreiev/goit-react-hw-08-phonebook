import { Typography, Link } from '@mui/material';

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 3, mb: 2 }}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/bukreiev"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        Scrooge McDuck Phonebook React Project
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
