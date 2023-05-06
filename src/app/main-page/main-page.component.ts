import { Component } from '@angular/core';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss','../../assets/Globe.scss'
  ]
})
export class MainPageComponent {

  src=[{
    src:'../assets/img/5.png'
  },
  
    {src:'../assets/img/6.png'
  }
  , {src:'../assets/img/7.png'
},
{src:'../assets/img/8.png'
}
]

// for search perpose
searchTerm: string = '';
filteredData: any[] = [];

}
