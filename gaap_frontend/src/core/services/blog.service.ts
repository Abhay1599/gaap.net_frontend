import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Blog {
  _id?: string;
  title: string;
  content: string;
  author: string;
  category: string;
  date: string; 
  image: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:3000/api/blog';

  constructor(private http: HttpClient) {}

  // Fetch all blog posts
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  // Add a new blog post (update to accept FormData)
  addBlog(blogData: FormData): Observable<Blog> {
    return this.http.post<Blog>(`${this.apiUrl}/add`, blogData);
  }
}
