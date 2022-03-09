interface AvatarInterface{
  text:string;
}

export const Avatar = (props:AvatarInterface)=>{
  return (
      <div className="avatar">{props.text.charAt(0).toUpperCase()}</div>
  )
}


/*
export default function IconAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: indigo[500] }}>A</Avatar>
    </Stack>
  );
}

/*
import { red } from '@mui/material/colors';

const color = red[500];
*/
