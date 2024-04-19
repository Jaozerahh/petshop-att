import NavBar from "@/components/NavBar";
import { Button, Input, Pagination, Select, SelectItem } from "@nextui-org/react";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";
import { get } from "../actions/agendamento/get";
import { AgendamentoItem } from "./AgendamentoItem";
import { getCategorias } from "../actions/categorias/getCategorias";
import { CategoriaSelect } from "@/components/CategoriaSelect";
import { MesesSelect } from "@/components/MesesSelect";

export default async function Agendamento() {
  const agendamento: Array<Agendamento> = await get()
  const categorias: Array<Categoria> = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="agendamento" />

      <section className="flex flex-col gap-4 bg-slate-800 w-4/5 max-w-[1024px] mt-4 p-6 rounded">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Agendamento</h2>
          <Link href="/agendamento/new">
            <Button color="primary" startContent={<Plus />}>novo horario</Button>
          </Link>
        </div>

        <div className="flex gap-4 items-center border-1 border-white/10 p-4 rounded">
          <Filter size={44} />
          <CategoriaSelect categorias={categorias} />
          <MesesSelect />
        </div>

        {agendamento.map(agendamento =>
          <AgendamentoItem agendamento={agendamento} />
        )}

      </section>

      <Pagination isCompact showControls total={10} initialPage={1} className="mt-6" />

    </main>


  );
}
