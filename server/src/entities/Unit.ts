import { UnitType } from './UnitType';
import { Player } from './Player';

export class Unit {
  name: string;
  type: UnitType;
  level: number;
  player_owner: Player;  
}