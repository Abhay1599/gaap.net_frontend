import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Blog, BlogService } from '../../../core/services/blog.service';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [NgFor, NgIf, ReactiveFormsModule, CommonModule],
})
export class BlogComponent implements OnInit {
  blogForm!: FormGroup;
  blogs: Blog[] = [];
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      date: [new Date().toISOString().split('T')[0], Validators.required],
      image: ['', Validators.required]
    });

    this.fetchBlogs();
  }

  fetchBlogs(): void {
    this.blogService.getBlogs().subscribe((blogs) => {
      this.blogs = blogs;
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.blogForm.patchValue({ image: this.selectedFile?.name });
  }

  addBlog(): void {
    if (this.blogForm.invalid) {
      this.blogForm.markAllAsTouched(); // Mark all fields as touched to trigger validation messages
      return;
    }

    const formData = new FormData();
    formData.append('title', this.blogForm.get('title')!.value);
    formData.append('content', this.blogForm.get('content')!.value);
    formData.append('author', this.blogForm.get('author')!.value);
    formData.append('category', this.blogForm.get('category')!.value);
    formData.append('date', this.blogForm.get('date')!.value);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.blogService.addBlog(formData).subscribe(
      (blog) => {
        this.blogs.unshift(blog); // Add the new blog to the top of the list
        this.resetForm();
      },
      (error) => {
        console.error('Error adding blog:', error);
        alert('Failed to add blog post. Please try again.');
      }
    );
  }

  resetForm(): void {
    this.blogForm.reset({
      title: '',
      content: '',
      author: '',
      category: '',
      date: new Date().toISOString().split('T')[0],
      image: ''
    });
    this.selectedFile = null;
  }
}
