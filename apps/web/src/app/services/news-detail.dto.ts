import { NewsCommentDto } from './news-comment.dto';

export class NewsDetailDto {
  comments: NewsCommentDto[];
  comments_count: number;
  domain: string;
  id: string;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}