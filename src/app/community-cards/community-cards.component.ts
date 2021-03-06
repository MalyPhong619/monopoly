import { Component, OnInit } from '@angular/core';
import { CommunityCard } from '../community-cards.model'
import { CommunityCardsService } from '../community-cards.service';

@Component({
  selector: 'app-community-cards',
  templateUrl: './community-cards.component.html',
  styleUrls: ['./community-cards.component.scss'],
  providers: [CommunityCardsService]
})

export class CommunityCardsComponent implements OnInit {
  communityCards: CommunityCard[];
  randomCommunityCard;


  constructor(private communityCardsService: CommunityCardsService) {}

  ngOnInit() {
    this.communityCards = this.communityCardsService.getCommunityCards();
  }

  communityCardGenerator() {
    let card = Math.floor(Math.random() * this.communityCards.length);
    this.randomCommunityCard = this.communityCards[card].description;
  }

}
