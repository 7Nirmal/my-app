import { useState } from 'react';
import Badge from '@mui/material/Badge';



export function Counter() {
  const [like, Setlike] = useState(0);
  const [dislikes, Setdislikes] = useState(0);


  return (
    <div>
      <Badge badgeContent={like} color="success" onClick={() => { Setlike(like + 1); }}>
  👍
</Badge> &nbsp;
<Badge badgeContent={dislikes} color="error" onClick={() => { Setdislikes(dislikes + 1); }}>
👎
</Badge>
    </div>
  );
}
