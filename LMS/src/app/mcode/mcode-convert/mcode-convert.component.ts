import { Component } from '@angular/core';
import mx from "mxgraph";
import { mxgraphConfig } from './../../../../mxgraph.config';

// ✔ Correct MXGraph initialization
const mxlib = mx(mxgraphConfig);


@Component({
  selector: 'app-mcode-convert',
  imports: [],
  templateUrl: './mcode-convert.component.html',
  styleUrl: './mcode-convert.component.css'
})
export class McodeCOnvertComponent {
  private graph: any;

  ngOnInit() {
    this.initGraph();
  }

  initGraph() {
    const container = document.getElementById("editor");

    mx.mxEvent.disableContextMenu(container);

    this.graph = new mx.mxGraph(container);
    this.graph.setPanning(true);
    new mx.mxRubberband(this.graph); // enable drag selection
    this.graph.setConnectable(true);
    this.graph.setCellsEditable(true);
    this.graph.setCellsResizable(true);
    this.graph.setEdgeLabelsMovable(true);

    // default style
    const style = this.graph.getStylesheet().getDefaultVertexStyle();
    style[mx.mxConstants.STYLE_FILLCOLOR] = "#76a5af";
    style[mx.mxConstants.STYLE_FONTCOLOR] = "#ffffff";
    style[mx.mxConstants.STYLE_ROUNDED] = true;
  }

  insertNode(id: string, x: number, y: number) {
    this.graph.getModel().beginUpdate();
    try {
      this.graph.insertVertex(
        this.graph.getDefaultParent(),
        id,
        id,
        x, y,
        120, 40
      );
    } finally {
      this.graph.getModel().endUpdate();
    }
  }

  connectNodes(source: string, target: string) {
    const parent = this.graph.getDefaultParent();
    const s = this.graph.getModel().getCell(source);
    const t = this.graph.getModel().getCell(target);

    this.graph.insertEdge(parent, null, "", s, t);
  }

  saveDiagram() {
    const encoder = new mx.mxCodec();
    const node = encoder.encode(this.graph.getModel());
    localStorage.setItem("diagram", mx.mxUtils.getPrettyXml(node));
  }

  loadDiagram() {
    const xml = localStorage.getItem("diagram");
    if (!xml) return;

    const doc = mx.mxUtils.parseXml(xml);
    const decoder = new mx.mxCodec(doc);
    decoder.decode(doc.documentElement, this.graph.getModel());
  }

}
