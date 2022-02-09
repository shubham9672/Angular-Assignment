import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

   constructor(private postApi: ServiceService) { }
 public posts = []
  private allposts = []

  private limit = 10
  public currentIndex = 0

  public postStart=0
  public postEnd=0
  public totalpost=0

  increment() {
    if ((this.currentIndex + 1) * this.limit < this.allposts.length) {
      this.currentIndex += 1
    }

    this.posts = this.pagination(this.currentIndex)
  }

  decrement() {
    if (this.currentIndex >= 1) {
      this.currentIndex -= 1
    }
    this.posts = this.pagination(this.currentIndex)
    console.log(this.posts)
  }

  pagination(index: any) {
    this.postStart = index*this.limit+1
    this.postEnd = Math.min(index*this.limit+this.limit,this.allposts.length)
    this.totalpost = this.allposts.length
    return this.allposts.slice(index * this.limit, index * this.limit + this.limit)
  }

  ngOnInit(): void {
    this.postApi.getPosts().subscribe((posts: any) => {
      this.allposts = posts
      this.posts = this.pagination(this.currentIndex)
    }, (err) => {
      console.log(err)
    })
    console.log(this.posts);
  }

}
