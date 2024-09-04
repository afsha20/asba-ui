import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrl: './service-modal.component.css'
})
export class ServiceModalComponent {

  activeModal = inject(NgbActiveModal);

	@Input() type: string ='';


  serviceMap = new Map<string, ServiceData>([
    ['gas_dist', {
      head: 'Gas Distribution System',
      body : 'Assured Integrity Of Gas Quality Will Be Maintained For Your Gas Distribution System. We Have Laid Such Systems For Automobile Industries & Electronic Industries. So Far We Have Laid A Pipe Line Of More Than 1 Lakh Metress',
      image: 'assets/img/portfolio-2.jpg'
    }],
    ['cascade', {
      head: 'Cascade',
      body : 'We Offer Wide Variety Of Cascades To Various Applications To Various Designs, We Have Vast Experience In Design And Supply Of Gas Cascades From 15 Cylinder To 250 Cylinders. We Have Supplied More Than 400 Cascades To Various Customers And Also Supplied Cascades To Gas Industries For Top Companies Such As M/S Linde India Ltd, M/S Praxair India Pvt Ltd, M/S Sicgil Sol, M/S Matheson K Air, M/S PPN Power Generating Etc...'
    }],
    ['regulator', {
      head: 'Regulator',
      body :  'We Have Various Types Of Regulators, Such As SS 316 Regulators For High-Purity Gases, High-Flow Regulators, And High-Pressure Regulators. We Also Provide Special Regulators Based On Customers Requirements'
    }],
    ['flow_skid', {
      head: 'Flow Skid',
      body : 'Skid Mounted Pressure Reducing Stations Are Fabricated To Customer’s Specifications. These Flow Skids Are Used In Various Applications Like Refinery, Pharmaceutical Industry, Effluent Treatment Plant For Oxygen Enrichment.'
    }],
    ['vaccum_ins', {
      head: 'Vacuum Insulated Cryo Pipe',
      body : 'Vacuum Insulated Cryp Piping Are Designed For Transfer The Cryogenic Liquids From The Source To Till The User Point With A Minimum Heat Loss And To Maintain The Same State Or Phase. We Have Supplied Installed And Commissioned Successfully In M/S GE Health Care Site, M/S. Applied Material Site On Behalf Of M/S Inox Air Products.'
    }],
    ['cylin_test', {
      head: 'Cylinder Testing Station',
      body : ''
    }],
    ['safety_rel', {
      head: 'Safety Relief Valve',
      body : ''
    }],
    ['flash_arr', {
      head: 'Flash Back Arrestor',
      body : 'We Offer a Range of Imported Flashback Arrestors for Fuel Gases'
    }],
    ['gas_blend', {
      head: 'Gas Blender',
      body : ''
    }],
    ['pres_reduc', {
      head: 'Pressure Reducing Station',
      body : ''
    }],
    ['flex_hose', {
      head: 'Flexible Hose',
      body : ''
    }],
    ['manifold_main', {
      head: 'Manifold Main Valves',
      body : ''
    }]
  ])


  data = this.serviceMap

}

export interface ServiceData {
  head: string;
  body: string;
  image?: string;
}