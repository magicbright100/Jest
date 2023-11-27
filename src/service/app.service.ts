import { Injectable } from '@angular/core';
import { polygon } from "viem/chains";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  network = polygon

  constructor() { }
}
