import {Injectable} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {v4 as uuid} from "uuid";


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'krilin',
    power: 1000,
  },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegete',
      power: 7500
    }
  ];

  /*creando un nuevo character(newCharacter)*/
  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(), ...character/*operador spred*/
      /*const newCharacter: Character = {
        id: uuid(),
        name: character.name,
        power: character.power,*/
    }

    this.characters.push(newCharacter);
  }


  /*onDleteCharacter(id: number): void {
    this.characters.splice(id, 1)
  }*/

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
