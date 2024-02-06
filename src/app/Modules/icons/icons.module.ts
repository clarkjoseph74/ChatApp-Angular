import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import {
  Camera,
  Heart,
  Github,
  Anchor,
  User,
  MessageCircle,
  Save,
  Trash,
  XCircle,
} from 'angular-feather/icons';
const icons = {
  Camera,
  Heart,
  Github,
  Anchor,
  User,
  MessageCircle,
  Save,
  Trash,
  XCircle,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
