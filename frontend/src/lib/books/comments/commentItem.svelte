<script lang="ts">
  import type { Comment } from '$lib/types/comment';
  import { timeAgo } from '../timeAgo';
  import { api } from '$lib/api';

  export let comment: Comment;
	
  const date = new Date(comment.createdAt);

</script>

<div>
  <div>
    {comment.text}
  </div>
  <div class="opacity-50 flex-row gap-2">
    <div>
      {comment?.user?.name}
    </div>
    <div>
      {timeAgo(date)}
    </div>
    <button on:click={api.delete('/comment/'+id)}>
      Excluir Comentário
    </button>
  </div>
</div>
