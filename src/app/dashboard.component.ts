import { Component } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    template: `
                <h1>{{title}}</h1>
                <nav>
                    <a routerLink="/dashboard">Dashboard</a>
                    <a routerLink="/heroes">Heroes</a>
                </nav>
                <h3>My DashBoard</h2>`


})
export class DashboardComponent { }
