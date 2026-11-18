"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/lib/data/profile";
export default function AppShell({children}:{children:React.ReactNode}){
 const [open,setOpen]=useState(false);
 const nav=[{label:"Work",href:"/#work"},{label:"Capabilities",href:"/#capabilities"},{label:"Journey",href:"/#journey"},{label:"About",href:"/#about"},{label:"Projects",href:"/projects"}];
 return <div className="ph-site-shell"><header className="ph-header"><Link className="ph-brand" href="/"><span>AB<span>.</span></span><small>ATIMANAS BARAL</small></Link><nav className={`ph-nav ${open?"ph-nav-open":""}`}>{nav.map(x=><Link key={x.href} href={x.href} onClick={()=>setOpen(false)}>{x.label}</Link>)}</nav><div className="ph-header-actions"><ThemeToggle compact/><Link className="ph-header-contact" href="/#contact">Let’s talk <ArrowUpRight size={14}/></Link><button className="ph-menu-toggle" onClick={()=>setOpen(v=>!v)} aria-label={open?"Close menu":"Open menu"}>{open?<X size={20}/>:<Menu size={20}/>}</button></div></header><div className="ph-page-content">{children}</div><footer className="ph-site-footer"><span>AB<span>.</span></span><small>MADE WITH INTENT, NOT NOISE.</small><a href={profile.github} target="_blank" rel="noreferrer">GITHUB ↗</a></footer></div>
}