import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: '',
    power: 0
  }]


  onDeleteCharacter(id?: string): void {
    /*si no existe que no mande a llamar*/
    if (!id) {
      return
    }
    console.log({id})
    this.onDeleteId.emit(id);
    console.log(id)
    // this.characterList.splice(id, 1);
  };
}
