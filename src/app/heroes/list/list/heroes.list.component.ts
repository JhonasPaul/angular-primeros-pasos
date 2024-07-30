import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes.list.component.html',
  styleUrl: './heroes.list.component.css'
})
export class HeroesListComponent {
  public heroName: string[] = ['Spiderman', 'Iroman', 'She Hulk', 'Thor'];
  public deleteHero?:string;

  public removeLastHero(): void {
   this.deleteHero = this.heroName.pop();
  }
}
