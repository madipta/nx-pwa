export class NewsCommentDto {
  id: string;
  level: number;
  user: string;
  time: number;
  time_ago: string;
  content: string;
  comments: NewsCommentDto[]
}