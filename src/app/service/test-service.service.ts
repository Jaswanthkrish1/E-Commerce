import { Injectable } from '@angular/core';
import { TestModuleModule } from '../test-module/test-module.module';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {

  constructor() { }
  private products:any[]=[
    { id:1,name:"polaroidCamera",text:"This is a polaroid camera. O'l skool style.",
    src:"https://cdn.glitch.com/5f8445e6-7cb3-47ef-8b81-884235184212%2Fphoto-1526170375885-4d8ecf77b99f.jpeg?v=1585724749339"
  },
  { id:2,name:"polaroidCamera",text:"This is a polaroid camera. O'l skool style.",
  src:"https://cdn.glitch.com/5f8445e6-7cb3-47ef-8b81-884235184212%2Fphoto-1526170375885-4d8ecf77b99f.jpeg?v=1585724749339"
  },
  { id:3,name:"polaroidCamera",text:"This is a polaroid camera. O'l skool style.",
  src:"https://cdn.glitch.com/5f8445e6-7cb3-47ef-8b81-884235184212%2Fphoto-1526170375885-4d8ecf77b99f.jpeg?v=1585724749339"
  },
   { id:3,name:"polaroidCamera",text:"This is a polaroid camera. O'l skool style.",
  src:"https://cdn.glitch.com/5f8445e6-7cb3-47ef-8b81-884235184212%2Fphoto-1526170375885-4d8ecf77b99f.jpeg?v=1585724749339"
  },
  { id:1,name:"polaroidCamera",text:"This is a polaroid camera. O'l skool style.",
  src:"https://cdn.glitch.com/5f8445e6-7cb3-47ef-8b81-884235184212%2Fphoto-1526170375885-4d8ecf77b99f.jpeg?v=1585724749339"
  },
  { id:1,name:"polaroidCamera",text:"This is a polaroid camera. O'l skool style.",
  src:"https://cdn.glitch.com/5f8445e6-7cb3-47ef-8b81-884235184212%2Fphoto-1526170375885-4d8ecf77b99f.jpeg?v=1585724749339"
  },
  { id:1,name:"polaroidCamera",text:"This is a polaroid camera. O'l skool style.",
  src:"https://cdn.glitch.com/5f8445e6-7cb3-47ef-8b81-884235184212%2Fphoto-1526170375885-4d8ecf77b99f.jpeg?v=1585724749339"
  },
  
  ]
}
